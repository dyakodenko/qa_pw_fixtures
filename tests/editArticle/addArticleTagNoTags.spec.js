import { test } from '../_fixtures/fixtures';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { createArticle } from '../../src/ui/actions/article/createNewArticle';

test.beforeEach(async ({ page, user, articleWithoutTags }) => {
  await signUpUser(page, user);
  await createArticle(page, articleWithoutTags);
});

test('Edit tag for article if no tags', async ({
  page,
  viewArticlePage,
  editArticlePage,
  articleWithTwoTags,
}) => {
  await viewArticlePage.clickEditArticleButton();
  await editArticlePage.editArticleTags(articleWithTwoTags);
  await editArticlePage.clickUpdateArticleButtonandWaitForNavigation();
  await page.reload();
  await viewArticlePage.assertArticleTagsAreVisible(articleWithTwoTags.tags);
});
