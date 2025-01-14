export default function useAlert() {
  const showAlert = () => {
    alert("This is composable");
  };

  return {
    showAlert,
  };
}
