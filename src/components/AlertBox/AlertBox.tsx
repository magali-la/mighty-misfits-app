import type { AlertBoxProps } from "../../types"

export default function AlertBox({type, message, onClose}: AlertBoxProps) {
    // styles for the alert type
    const alertStyles = {
        success: 'bg-green-300/50 font-bai border-l-8 border-l-green-600',
        error: 'bg-red-400/50 font-bai border-l-8 border-l-red-600'
    }

    return (
        <div className={`flex flex-col items-start w-full p-6 rounded-2xl shadow-xl ${type == 'Error' ? alertStyles.error : alertStyles.success}`}>
            <div className="flex flex-row justify-between w-full">
                <h5 className="text-lg font-bold">{type}!</h5>
                <div onClick={onClose} className="font-bold text-lg cursor-pointer">X</div>
            </div>
            <p className="text-lg text-left">{message}</p>
        </div>
    )
}