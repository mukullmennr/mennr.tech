import React, { forwardRef, ForwardedRef } from "react";
import { useRouter } from "next/navigation";
import styles from "./modal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
	children: React.ReactNode;
}

const Modal = forwardRef(function Modal(
	props: ModalProps,
	ref: ForwardedRef<HTMLDialogElement>
) {
	const router = useRouter();

	const handleClose = () => {
		router.push("/solutions#get-in-touch");
	};

	return (
		<dialog className={styles.modal} ref={ref} onClose={handleClose}>
			<div className={styles.menu}>
				<img src="/mennr-dark.svg" alt="mennr" />

				<a href="#get-started">
					<FontAwesomeIcon icon={faClose} />
				</a>
			</div>

			<div className={styles.main}>
				<div className={styles.text}>
					<h4 className={styles.heading}>
						Solutions personalized for YOUR business
					</h4>

					<p className={styles.highlight}>So What Happens Next?</p>

					<ol className={styles.list}>
						<li>
							<span className={styles.bold}>Basic Review:</span>
							Our team of business strategists look at your
							current business requirements to get a basic
							understanding of your business.
						</li>
						<li>
							<span className={styles.bold}>Initial Audit:</span>A
							Mennr certified marketing strategist then looks at
							your current digital assets, analyzes what you are
							doing now and what can be done better. We cover all
							assets: such as your website, google business
							profile, social media & more.
						</li>
						<li>
							<span className={styles.bold}>
								We Get In Touch:
							</span>
							A strategist creates a marketing plan based on our
							initial audit and reaches out to review it with you.
						</li>
						<li>
							<span className={styles.bold}>
								No Strings Attached:
							</span>
							Our initial audits, interactions and everything in
							between are absolutely FREE. You pay us for any
							services only when you feel we might be the right
							fit for you.
						</li>
					</ol>
				</div>
				<div className={styles.form}>
					<h4 className={styles.heading}>Tell Us About Yourself</h4>
					{props.children}
				</div>
			</div>
		</dialog>
	);
});

export default Modal;
