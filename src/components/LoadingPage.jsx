import loading from "../images/LOGO-ezgif.com-resize.gif";

export default function LoadingPage() {
  return (
    <div>
      <div className="h-[100vh] flex w-full justify-center items-center">
        <img src={loading} alt="loading gif" />
      </div>
    </div>
  );
}
