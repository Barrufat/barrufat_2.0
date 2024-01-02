import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/print/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useTranslation } from "react-i18next";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import PdfViewerStyled from "./PdfViewerStyled";
import { useAppSelector } from "../../store/hooks";
import { useDispatch } from "react-redux";
import { switchCVPdfActionCreator } from "../../store/feature/ui/uiSlice";

const PdfViewer = () => {
  const [t, i18n] = useTranslation("global");
  const dispatch = useDispatch();
  const newPlugin = defaultLayoutPlugin();
  const isThemeLight = useAppSelector((state) => state.uiState.isThemeLight);

  const closeResume = () => {
    dispatch(switchCVPdfActionCreator());
  };

  return (
    <PdfViewerStyled>
      <Worker
        workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js"
        i18nIsDynamicList
      >
        <Viewer
          theme={isThemeLight ? "light" : "dark"}
          plugins={[newPlugin]}
          fileUrl={
            i18n.language === "en"
              ? "./Alex_Barbero_CV_EN.pdf"
              : "./Alex_Barbero_CV.pdf"
          }
        />
      </Worker>
      <button className="section__action" onClick={closeResume}>
        {t("aboutMe5")}
      </button>
    </PdfViewerStyled>
  );
};

export default PdfViewer;
