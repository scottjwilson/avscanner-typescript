import "@/styles/globals.css";
import "@/styles/nprogress.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserProvider } from "@supabase/supabase-auth-helpers/react";
import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";
import Page from "@/components/Page";
import { ThemeProvider } from "next-themes";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";

import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apolloClient";
import { useEffect } from "react";
import * as Fathom from "fathom-client";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  const router = useRouter();
  useEffect(() => {
    Fathom.load("GDPCDBLZ", {
      includedDomains: ["avscannernews.com", "www.avscannernews.com"],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }

    router.events.on("routeChangeComplete", onRouteChangeComplete);
  }, [router]);
  return (
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={client}>
        <UserProvider supabaseClient={supabaseClient}>
          <ThemeProvider>
            <Page>
              <Component {...pageProps} />
            </Page>
          </ThemeProvider>
        </UserProvider>
      </ApolloProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
