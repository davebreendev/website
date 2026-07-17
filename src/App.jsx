import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { educationData, employmentData, influencesData, interestsData, } from './data';
import { store } from "./store/store";
import Root from './components/root/Root';
import Main from "./components/main/Main";
import ContactSent from './components/contact/ContactSent';
import PageNotFound from './components/pageNotFound/PageNotFound';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root />}>
    <Route index element={
      <Main
        education={educationData}
        employment={employmentData}
        influences={influencesData}
        interests={interestsData}
      />
    }
    />
    <Route path='/contact' element={<ContactSent />} />
    <Route path="*" element={<PageNotFound />} />
  </Route>
));

export default function App() {
  return (
    <RouterProvider router={router}>
      <Provider store={store} />
    </RouterProvider>
  );
}