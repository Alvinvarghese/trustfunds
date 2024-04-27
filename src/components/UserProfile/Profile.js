import ChangePassword from "./components/ChangePassword";
import EmailUsername from "./components/EmailUsername";
import TransactionHistory from "./components/TransactionHistory";

const Profile = () => {
  return (
    <>
      <EmailUsername />
      <ChangePassword />
      <TransactionHistory />
    </>
  );
};

export default Profile;
