/*

    This is used to clear both local and session storages

*/
export default function ClearingStorages() {
  if (sessionStorage.getItem("Mobile Nav Opened")) {
    sessionStorage.removeItem("Mobile Nav Opened");
  }

  if (sessionStorage.getItem("Resume Viewer Opened")) {
    sessionStorage.removeItem("Resume Viewer Opened");
  }
}
