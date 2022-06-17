import "@/styles/globals.css";
import "@/styles/nprogress.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserProvider } from "@supabase/supabase-auth-helpers/react";
import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";
import Page from "@/components/Page";
import { ThemeProvider } from "next-themes";
import Router from "next/router";
import NProgress from "nprogress";
import { useTheme } from "next-themes";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apolloClient";
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

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
