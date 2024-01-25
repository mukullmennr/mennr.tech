import React, {
	useRef,
	forwardRef,
	ForwardedRef,
	useImperativeHandle,
} from "react";
import styles from "./pricing-modal.module.scss";
import { ModalMethods } from "../PricingCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faClose } from "@fortawesome/free-solid-svg-icons";
import CompareTable from "./CompareTable";

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

	const closeModal = () => {
		modalRef.current?.close();
	};

	return (
		<dialog className={styles.dialog} ref={modalRef}>
			<div className={styles.menu}>
				<img src="/mennr-dark.svg" alt="mennr" />

				<button onClick={closeModal} title="close">
					<FontAwesomeIcon icon={faClose} />
				</button>
			</div>

			<div className={styles.heading}>
				<h2>Compare Plans</h2>
			</div>

			<div className={styles.scroll}>
				<div className={styles.table}>
					<div className={styles.tableHeading}>
						<h3>
							<FontAwesomeIcon icon={faAngleDown} />
						</h3>
						<h3>Mennr Silver</h3>
						<h3>Mennr Gold</h3>
					</div>

					<div className={styles.tableContent}>
						<CompareTable />
					</div>
				</div>
			</div>
		</dialog>
	);
});

export default Modal;
