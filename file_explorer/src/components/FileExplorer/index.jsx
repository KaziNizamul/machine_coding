/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./index.module.scss";

const FileExplorer = ({ explorer }) => {
  const [folderCollapse, setFolderCollapse] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showInput, setShowInput] = useState({
    visible: false,
    icon: null,
    fileType: "",
  });
  const onHandleCreateNewFileFolder = (evt) => {
    const isFolder = evt?.target?.name === "folder";
    setShowInput({
      ...showInput,
      icon: getFileIcon(isFolder),
      visible: true,
      fileType: isFolder ? "folder" : "file",
    });
    setFolderCollapse(true);
  };
  const onhandleBlur = () => {
    resetInputData();
  };
  const resetInputData = () => {
    setShowInput({
      ...showInput,
      visible: false,
      icon: null,
    });
    setInputValue("");
  };
  const onHandleInputValue = (evt) => {
    const {
      type,
      target: { value },
      keyCode,
    } = evt;
    if (type === "change") {
      setInputValue(value);
    }
    if (keyCode === 13) {
      updateExplorerData();
      resetInputData();
    }
  };
  const updateExplorerData = () => {
    explorer.items.unshift({
      id: crypto.randomUUID(),
      name: inputValue,
      isFolder: showInput?.fileType === "folder",
      items: [],
    });
  };
  const getFileIcon = (isFolder) => (isFolder ? "📁" : "📄");
  return (
    <section className={styles.fileExplorerContainer}>
      {/* main component */}
      <div className={styles.explorerItemName}>
        <span
          className={explorer.isFolder ? styles.folderStyle : styles.fileStyle}
          onClick={() => setFolderCollapse(!folderCollapse)}
        >
          {getFileIcon(explorer.isFolder)}
          {explorer.name}
        </span>

        {explorer.isFolder && (
          <div
            className={styles.createButtons}
            onClick={(e) => onHandleCreateNewFileFolder(e)}
          >
            <button name="file" className={styles.file}>
              <span>+ 📄</span>
            </button>
            <button name="folder" className={styles.file}>
              <span>+ 📁</span>
            </button>
          </div>
        )}
      </div>

      {/* recursive items */}
      {explorer.isFolder && folderCollapse && (
        <>
          {showInput?.visible && (
            <section className={styles.inputContainer}>
              <span>{showInput?.icon}</span>
              <input
                autoFocus
                type="text"
                value={inputValue}
                onBlur={onhandleBlur}
                onChange={onHandleInputValue}
                onKeyDown={onHandleInputValue}
              />
            </section>
          )}
          {explorer.items.map((item) => {
            return (
              <div key={item.id} className={styles.items}>
                <FileExplorer explorer={item} />
              </div>
            );
          })}
        </>
      )}
    </section>
  );
};

export default FileExplorer;
