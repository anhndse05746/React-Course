import React from "react";
import Customer from "./customer/customer";
import Movies from "./movie/movies";
import NavBar from "./navBar";
import Rental from "./rental/rental";
import { Switch, Route, Redirect } from "react-router-dom";
import MovieForm from "./movie/moviesForm";
import NotFound from "./common/notFound";
import LoginForm from "./loginForm";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/movies/:id" component={MovieForm}></Route>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customer}></Route>
          <Route path="/rentals" component={Rental}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </div>
  );
};
export default Home;
