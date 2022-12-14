import React, { useState, useRef, useEffect } from "react";
import styles from "./UploadButton.module.css";
import axios from "axios";
import UrlUploadForm from "../UrlUploadForm/UrlUploadForm";

const UploadButton = (props) => {
  const [file, setFile] = useState("");
  const [isShown, setIsShown] = useState(false);
  const submitBtn = useRef(null);
  const inputFile = useRef(null);

  const onChange = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    submitBtn.current.click();

    return () => {};
  }, [file]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", "image");
    if (file) {
      try {
        const res = await axios.post(
          "https://api.mediaeyenft.com/metavatarapi/user/meta/vatar/imageupload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        const paramArr = res.data.data;
        // const {filePath } = paramArr.filePath;
        // console.log('RESPONCE',paramArr)
        props.updateImageSrc(paramArr.filePath);

        props.openMain();
      } catch (err) {
        if (err.response.status === 500) {
          console.log("There was a problem with the server");
        } else {
          console.log(err.response.data.msg);
        }
      }
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} style={{ display: "none" }}>
        <div className="input-group mb-3">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="inputGroupFile01"
              onChange={onChange}
              ref={inputFile}
            />
          </div>
          <div className="input-group-append">
            <input
              type="submit"
              value="Upload"
              className="btn btn-primary input-group-text"
              ref={submitBtn}
            />
          </div>
        </div>
      </form>
      <div className={styles.container}>
        <div className={styles.group + " btn-group"}>
          <button
            type="button"
            className="btn"
            onClick={() => inputFile.current.click()}
          >
            Choose a File
          </button>
          <button
            type="button"
            className="btn dropdown-toggle dropdown-toggle-split"
            onClick={() => setIsShown(!isShown)}
            style={{ fontSize: "22px" }}
          >
            <span className="sr-only">Paste your URL</span>
          </button>
        </div>
        <div>
          {isShown && (
            <UrlUploadForm
              updateImageSrc={props.updateImageSrc}
              openMain={props.openMain}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadButton;
