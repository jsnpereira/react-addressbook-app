import React, { ChangeEvent, FC} from "react";
import '../../../styles/components/modal/modalSimple.scss'

interface ModalProps {
    modalInfo: {
        show: boolean,
        message: string
    }
}

const checkModal = (status: boolean) => {
    if(status){
        return 'modal-wrapper';
    } else {
        return 'modal-wrapper modal-hidden'
    }
}

const ModalSimples: FC<ModalProps> = ({
        modalInfo
    }) => {
    return(
        <div className={checkModal(modalInfo.show)}>
            <div className='modal-card'>

            </div>

        </div>

    )
}

export default  ModalSimples;