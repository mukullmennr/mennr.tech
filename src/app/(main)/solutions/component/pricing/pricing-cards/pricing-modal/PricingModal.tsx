import React, {
	useRef,
	forwardRef,
	ForwardedRef,
	useImperativeHandle,
} from "react";
import { ModalMethods } from "../PricingCard";

interface PricingModalProps {
	data?: any;
}

const Modal = forwardRef(function PricingModal(
	props: PricingModalProps,
	ref: ForwardedRef<ModalMethods>
) {
	const modalRef = useRef<HTMLDialogElement | null>(null);

	useImperativeHandle(ref, () => ({
		openModal: () => {
			modalRef.current?.showModal();
		},
		closeModal: () => {
			modalRef.current?.close();
		},
	}));

	return <dialog ref={modalRef}>hello this is modal</dialog>;
});

export default Modal;
