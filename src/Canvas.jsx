import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react';
import { useState } from 'react';
const Canvas = () => {
    const { editor, onReady } = useFabricJSEditor();
    const [savedLines, setSavedLines] = useState([]);
    
    const addLine = () => {
        editor?.addLine()
    };

    const clearCanvas = () => {
        if (editor) {
            editor.canvas.clear(); // Limpia todos los objetos del lienzo
            setSavedLines([]);
        }
    };

    const saveLines = () => {
        if (editor) {
            // Obtener todos los objetos del lienzo
            const allObjects = editor.canvas.getObjects();

            // Filtrar solo las líneas
            const lines = allObjects.filter(obj => obj.type === 'line');

            // Guardar en estado
            const linesObject = lines.map(line => line.toObject());
            setSavedLines(linesObject);

            console.log('Lines saved:', linesObject);
            console.log(savedLines)
        }


    };

   

    return (
        <div className='relative w-full h-screen bg-cover bg-center' style={{ backgroundImage: "url(/montana.jpg)", backgroundSize: 'cover' }}>
            <div className='flex justify-between items center'>
                <button className='p-5 rounded-md text-lg font-semibold bg-blue-300' onClick={addLine}>Add Line</button>
                <button className='p-5 rounded-md text-lg font-semibold bg-blue-300' onClick={saveLines}>Save Lines</button>
                <button className='p-5 rounded-md text-lg font-semibold bg-green-300' onClick={clearCanvas}>Clear</button>
            </div>
            <div className='flex flex-col'>
                <div className=''>
                    <FabricJSCanvas className="w-full h-screen" onReady={onReady} />
                </div>
            </div>
        </div>
    );
};

export default Canvas;
