import React, { FC } from "react";

import SettingsBackupRestoreIcon from "@material-ui/icons/SettingsBackupRestore";
import IconButton from "@material-ui/core/IconButton";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import { EmptyScreen, Table } from "../../index";
import BackupIcon from "@material-ui/icons/Backup";

export interface Props {
  title: string;
  disabled?: boolean;
  backupFiles: object[];
  onInit: any;
  onBackupConfiguration: any;
  onRestoreBackupConfiguration: any;
  onSaveBackupConfiguration: any;
}

const ExportConfiguration = ({
  disabled = false,
  backupFiles = [],
  onInit = () => 0,
  onBackupConfiguration = () => 0,
  onRestoreBackupConfiguration = (path) => 0,
  onSaveBackupConfiguration = (path, name) => 0,
}) => {
  const columns = [
    {
      Header: "Name",
      accessor: "name",
      style: {
        textAlign: "center",
      },
    },
    {
      Header: "Path",
      accessor: "path",
      style: {
        textAlign: "center",
      },
      show: false,
    },
    {
      Header: "Created At",
      accessor: "createdAt",
      style: {
        textAlign: "center",
      },
    },
    {
      Header: "Size",
      accessor: "size",
      style: {
        textAlign: "center",
      },
    },
    {
      Header: "",
      filterable: false,
      sortable: false,
      resizable: false,
      Cell: (porps) => {
        return (
          <div>
            <IconButton
              color="primary"
              disabled={disabled}
              onClick={() => onRestoreBackupConfiguration(porps.original.path)}
            >
              <SettingsBackupRestoreIcon titleAccess={"restoreBackUpFile"} />
            </IconButton>
            <IconButton
              color="primary"
              disabled={disabled}
              onClick={() =>
                onSaveBackupConfiguration(
                  porps.original.path,
                  porps.original.name
                )
              }
            >
              <SaveAltIcon titleAccess={"downloadBackUpFile"} />
            </IconButton>
          </div>
        );
      },
      width: 100,
      height: 20,
    },
  ];
  return (
    <Table
      tableTitle={"Backup Files"}
      data={backupFiles}
      columns={columns}
      addComponent={
        <IconButton
          color="primary"
          disabled={disabled}
          onClick={() => {
            onBackupConfiguration();
            setTimeout(() => {
              onInit();
            }, 1000);
          }}
        >
          <BackupIcon titleAccess={"backup"} />
        </IconButton>
      }
      pageSize={5}
    />
  );
};

const ExportImportScreen: FC<Props> = ({
  title = "",
  disabled = false,
  backupFiles = [],
  onInit = () => 0,
  onBackupConfiguration = () => 0,
  onRestoreBackupConfiguration = (path) => 0,
  onSaveBackupConfiguration = (path, name) => 0,
}) => {
  return (
    <EmptyScreen
      title={title}
      page={
        <ExportConfiguration
          backupFiles={backupFiles}
          onInit={onInit}
          onBackupConfiguration={onBackupConfiguration}
          onRestoreBackupConfiguration={onRestoreBackupConfiguration}
          onSaveBackupConfiguration={onSaveBackupConfiguration}
        />
      }
    />
  );
};
export default ExportImportScreen;
