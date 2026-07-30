import RecruiterLayout from "../../layouts/RecruiterLayout";

const Settings = () => {
  return (
    <RecruiterLayout>

      <h1 className="text-3xl font-bold mb-8">
        Settings
      </h1>

      <div className="bg-white rounded-xl shadow">

        <div className="p-6 border-b">
          Change Password
        </div>

        <div className="p-6 border-b">
          Notification Preferences
        </div>

        <div className="p-6 border-b">
          Privacy Settings
        </div>

        <div className="p-6 text-red-600 font-semibold">
          Delete Account
        </div>

      </div>

    </RecruiterLayout>
  );
};

export default Settings;