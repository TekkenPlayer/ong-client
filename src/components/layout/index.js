import React from 'react';

/* Componentes */
import HomePage from '../../pages/homeScreen/homeScreen';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import RegisterPage from '../../pages/Forms/RegisterForm';
import LoginPage from '../../pages/login';
import ContactPage from '../../pages/Forms/Contact/Contact';
import NewsPage from '../../pages/News/News';
import NewsDetailedPage from '../../pages/DetailNew';
import DetailActivity from '../../pages/DetailActivity/DetailActivity';

import BackOfficeRoutes from './backOfficeRoutes';

/* Modulos */

import { Switch, Route, Redirect } from 'react-router-dom';

const layout = () => {
  return (
    <main>
      <Header />
      <section>
        <Switch>
          {BackOfficeRoutes}
          <Route path="/activity/:id" component={DetailActivity} />
          {/* PAGE TO LIST ALL THE ACTIVITIES IS MISSING */}
          <Route path="/activity" exact component={HomePage} />
          <Route path="/news/:id" component={NewsDetailedPage} />
          <Route path="/news" exact component={NewsPage} />
          <Route path="/contact-us" component={ContactPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/" exact component={HomePage} />
          {/* <Redirect to="/" /> */}
        </Switch>
      </section>
      <Footer />
    </main>
  );
};

export default layout;
