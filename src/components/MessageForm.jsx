// src/components/MessageForm.jsx
export default function MessageForm() {
    return (
      <div id="form" className="card bg-neutral/50 backdrop-blur-md p-6 rounded-2xl shadow-lg font-body">
        <h2 className="text-2xl font-heading mb-4 text-primary">Deja tu mensaje</h2>
        <form className="space-y-4">
          <div>
            <label className="label"><span className="label-text">Nombre</span></label>
            <input type="text" placeholder="Tu nombre" className="input input-lg input-bordered w-full" />
          </div>
          <div>
            <label className="label"><span className="label-text">Mensaje</span></label>
            <textarea placeholder="Tu mensaje" className="textarea textarea-lg textarea-bordered w-full h-32"></textarea>
          </div>
          <button type="submit" className="btn btn-secondary btn-block btn-lg font-heading">
            Enviar
          </button>
        </form>
      </div>
    );
  }
  