type Props = {
    message: string;
};

const ErrorMessage = ({ message }: Props) => {
    return (
        <div className="bg-red-500/20 border border-red-400 text-red-100 px-4 py-3 rounded-xl text-center">
            ⚠️ {message}
        </div>
    );
};

export default ErrorMessage;