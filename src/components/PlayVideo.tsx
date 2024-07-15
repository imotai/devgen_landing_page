import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";
import ReactPlayer from "react-player";

type PlayVideoProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  url: string;
};

export default function PlayVideo(props: PlayVideoProps) {
  const { open, setOpen, url } = props;
  return (
    <Modal
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      disableEscapeKeyDown
    >
      <ModalDialog sx={{ width: "80%", height: "80%" }}>
        <ModalClose />
        <ReactPlayer
          url={url}
          playing={open}
          width="100%"
          height="100%"
          controls={true}
        />
      </ModalDialog>
    </Modal>
  );
}
