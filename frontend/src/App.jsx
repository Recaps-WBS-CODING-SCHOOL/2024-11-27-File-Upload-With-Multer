import { useEffect, useState } from 'react';
import Alert from './components/Alert';
import Preview from './components/Preview';

const App = () => {
    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setError(null), 3000);
        return () => clearTimeout(timer);
    }, [error]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-2xl'>File upload</h1>
            <form
                className='mt-5 w-1/3 mx-auto flex flex-col items-center gap-5'
                onSubmit={handleSubmit}
            >
                <input
                    type='file'
                    className='file-input input-bordered w-full'
                />
                {error ? (
                    <Alert message={error} />
                ) : (
                    <button
                        type='submit'
                        className='btn btn-block'
                        disabled={loading}
                    >
                        Upload
                    </button>
                )}
            </form>
            {image && <Preview image={image} />}
        </div>
    );
};

export default App;
