import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const LoadingErrorHandler: React.FC<{ loading: boolean; error: string | null; noResultsMessage?: string | null }> = ({ loading, error, noResultsMessage }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "red", marginTop: "16px" }}>
      <ErrorOutlineIcon />
      <p>{error}</p>
    </div>
  );
  if (noResultsMessage) return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "red", marginTop: "16px" }}>
      <ErrorOutlineIcon />
      <p>{noResultsMessage}</p>
    </div>
  );
  return null;
};

export default LoadingErrorHandler;