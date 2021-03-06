import { ColorSchemeProvider, Container, MantineProvider } from "@mantine/core";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../../components/Layout";
import AuthPage from "../Auth";
import LocalSession from "../LocalSession";
import SessionPage from "../Session";
import JoinSessionPage from "../JoinSession";
import { useDispatch, useSelector } from "react-redux";
import { selectThemeScheme, toggleColorScheme } from "../../store/SiteConfig";
import { AuthProvider } from "../../services/AuthProvider";
import ProtectedRoute from "../../components/ProtectedRoute";
import { SaltimerProvider } from "../../services/SaltimerProvider";

const App = () => {
  const dispatch = useDispatch();
  const themeScheme = useSelector(selectThemeScheme);

  return (
    <ColorSchemeProvider
      colorScheme={themeScheme}
      toggleColorScheme={() => dispatch(toggleColorScheme())}
    >
      <MantineProvider theme={{ colorScheme: themeScheme }}>
        <AuthProvider>
          <Layout>
            <Container>
              <SaltimerProvider>
                <Routes>
                  <Route path='/auth' element={<AuthPage />} />

                  <Route
                    path='/'
                    element={<ProtectedRoute render={<JoinSessionPage />} />}
                  />
                  <Route
                    path='/local/session'
                    element={<ProtectedRoute render={<LocalSession />} />}
                  />

                  <Route
                    path='/session/:id'
                    element={<ProtectedRoute render={<SessionPage />} />}
                  />
                </Routes>
              </SaltimerProvider>
            </Container>
          </Layout>
        </AuthProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default App;
