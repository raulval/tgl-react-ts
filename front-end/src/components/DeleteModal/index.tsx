import {
  CancelButton,
  ConfirmButton,
  Modal,
  ModalBanner,
  ModalContent,
  ModalFooter,
  ModalShadow,
} from "./styles";

interface ModalProps {
  setClose: () => void;
  deleteBet: () => void;
  type?: string;
  numbers?: number[];
}

const DeleteModal = (props: ModalProps) => {
  function close() {
    props.setClose();
  }
  function submit() {
    props.deleteBet();
    close();
  }
  return (
    <>
      <ModalShadow onClick={close} />
      <Modal>
        <ModalBanner>Delete the bet?</ModalBanner>
        <ModalContent>
          <p>
            Do you want to delete {props.type} with the numbers{" "}
            {props.numbers?.toString()}?
          </p>
        </ModalContent>
        <ModalFooter>
          <ConfirmButton onClick={submit}> Delete </ConfirmButton>
          <CancelButton onClick={close}> Cancel </CancelButton>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default DeleteModal;
