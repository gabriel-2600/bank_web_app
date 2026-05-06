import NavBarLandingPage from "../components/LandingPage/NavBarLandingPage";

function LandingPage() {
  return (
    <>
      <NavBarLandingPage />
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm sm:p-10">
          <p className="text-sm font-medium uppercase tracking-wide text-[#8494FF]">
            Welcome
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            Bank Web App
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-black/60 sm:text-base">
            Manage your bank accounts in one place. Create accounts, track
            details, and get started in a few clicks.
          </p>
        </section>
      </main>
    </>
  );
}

export default LandingPage;
