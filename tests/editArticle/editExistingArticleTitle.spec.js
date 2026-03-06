import { test } from '../_fixtures/fixtures';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { createArticle } from '../../src/ui/actions/article/createNewArticle';

test.beforeEach(async ({ page, user, articleWithoutTags }) => {
  await signUpUser(page, user);
  await createArticle(page, articleWithoutTags);
});

test('Edit title for article', async ({
  viewArticlePage,
  editArticlePage,
  articleWithoutTags,
}) => {
  await viewArticlePage.clickEditArticleButton();
  await editArticlePage.editArticleTitle(articleWithoutTags);
  await editArticlePage.clickUpdateArticleButton();
  await viewArticlePage.assertArticleTitleIsVisible(articleWithoutTags.title);
});
