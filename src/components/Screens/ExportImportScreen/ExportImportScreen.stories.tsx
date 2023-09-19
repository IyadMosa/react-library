// @ts-ignore
import React from "react";
import TableScreen from "./ExportImportScreen";
import TableWithAddForm from "../../Tables/TableWithAddForm";
import ExportImportScreen from "./ExportImportScreen";

export default {
  title: "exportImportScreen",
};

export const exportImportScreen = () => {
  const backupFiles = [
    {
      name: "1-1-2020",
      path: "id",
      createdAt: "1-1-2020",
      size: "1000",
    },
  ];
  return (
    <ExportImportScreen
      backupFiles={backupFiles}
      onBackupConfiguration={() => window.alert("backup")}
      onInit={() => 0}
      onRestoreBackupConfiguration={() => window.alert("restore")}
      onSaveBackupConfiguration={() => window.alert("download")}
      title={""}
    />
  );
};
