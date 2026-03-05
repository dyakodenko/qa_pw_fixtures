import { test as base } from '@playwright/test';
import { generateNewUserData } from '../../src/common/testData/generateNewUserData';
import { CreateArticlePage } from '../../src/ui/pages/article/CreateArticlePage';
import { ViewArticlePage } from '../../src/ui/pages/article/ViewArticlePage';
import { EditArticlePage } from '../../src/ui/pages/article/EditArticlePage';
import { generateNewArticleData } from '../../src/common/testData/generateNewArticleData';

export interface User {
  username: string;
  email: string;
  password: string;
}

export interface GeneratedArticle {
  title: string;
  description: string;
  text: string;
  tags: string[];
}

export const test = base.extend<{
  user: User;
  createArticlePage: CreateArticlePage;
  viewArticlePage: ViewArticlePage;
  editArticlePage: EditArticlePage;
  articleWithoutTags: GeneratedArticle;
  articleWithOneTag: GeneratedArticle;
  articleWithTwoTags: GeneratedArticle;
}>({
  user: async ({}, use) => {
    const user = generateNewUserData();
    await use(user);
  },
  createArticlePage: async ({ page }, use) => {
    const createArticlePage = new CreateArticlePage(page);

    await use(createArticlePage);
  },
  viewArticlePage: async ({ page }, use) => {
    const viewArticlePage = new ViewArticlePage(page);

    await use(viewArticlePage);
  },
  editArticlePage: async ({ page }, use) => {
    const editArticlePage = new EditArticlePage(page);

    await use(editArticlePage);
  },
  articleWithoutTags: async ({}, use) => {
    const articleWithoutTags = generateNewArticleData(null, 0);
    await use(articleWithoutTags);
  },
  articleWithOneTag: async ({}, use) => {
    const articleWithOneTag = generateNewArticleData(null, 1);
    await use(articleWithOneTag);
  },
  articleWithTwoTags: async ({}, use) => {
    const articleWithTwoTags = generateNewArticleData(null, 2);
    await use(articleWithTwoTags);
  },
});
