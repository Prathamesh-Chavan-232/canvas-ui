export default function SettingsPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="max-w-2xl space-y-4">
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Theme</h2>
          <p className="text-muted-foreground">
            Customize the appearance of your site builder
          </p>
        </div>
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Account</h2>
          <p className="text-muted-foreground">
            Manage your account settings and preferences
          </p>
        </div>
      </div>
    </div>
  );
}
