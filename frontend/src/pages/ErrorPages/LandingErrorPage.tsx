import NavBarLandingPage from "../../components/LandingPage/NavBarLandingPage";

function LandingErrorPage() {
  return (
    <>
      <NavBarLandingPage />
      <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="rounded-2xl border border-black/10 bg-white p-8 text-center shadow-sm sm:p-10">
          <h1 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">
            (404) Looks like this does not exist
          </h1>
        </div>
      </main>
    </>
  );
}

export default LandingErrorPage;
