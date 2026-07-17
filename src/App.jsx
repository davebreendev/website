import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Root from './components/root/Root';
import Main from "./components/main/Main";
import ContactSent from './components/contact/ContactSent';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root />}>
    <Route index element={<Main />} />
    <Route path='/contact' element={<ContactSent />} />
  </Route>
));

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
