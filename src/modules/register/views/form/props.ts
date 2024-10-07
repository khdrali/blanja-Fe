interface RegisterFormProps {
  role: "customer" | "seller";
  setRole: React.Dispatch<React.SetStateAction<"customer" | "seller">>;
}
