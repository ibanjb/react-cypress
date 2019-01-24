import React from "react";
import Root from "../ecosystems/Root";
import { Dashboard } from "../../../../Dashboard/src/components/ecosystems/Dashboard";
import { Example } from "../../../../Example/src/components/ecosystems/Example";
import { TestPage } from "../../../../TestPage/src/components/ecosystems/TestPage";
import { PageNotFound } from "../../../../PageNotFound/src/components/ecosystems/PageNotFound";

const root = (props: any) => <Root />;

const dashboard = (props: any) => (
  <Root>
    <Dashboard />
  </Root>
);

const example = (props: any) => (
  <Root>
    <Example />
  </Root>
);

const testPage = (props: any) => (
  <Root>
    <TestPage />
  </Root>
);

const pageNotFound = (props: any) => (
  <Root>
    <PageNotFound />
  </Root>
);

const appComponents = {
  root,
  dashboard,
  example,
  testPage,
  pageNotFound
};

export default appComponents;
