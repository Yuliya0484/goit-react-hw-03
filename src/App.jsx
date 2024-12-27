import Contact from "./components/Contact/Contact.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";

function App() {
  return (
    <div className="phonebook-box">
      <h1 className="phonebook-title">Phonebook</h1>

      <ContactForm />
      <SearchBox />
      <ContactList />
      <Contact />
    </div>
  );
}

export default App;
