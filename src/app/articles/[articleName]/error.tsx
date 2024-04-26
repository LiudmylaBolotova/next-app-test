'use client';

import { AppLink } from '../../app-link/app-link';

export default function ArticleError() {
  return (
    <>
      No articles for you my sir
      <AppLink href="/">Go Home</AppLink>
    </>
  );
}