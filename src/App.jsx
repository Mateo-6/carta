import { useEffect, useMemo, useState } from "react";

export default function App() {
  // Define la fecha objetivo: hoy a las 5:00 p. m. hora local del navegador
  const target = useMemo(() => {
    const d = new Date();
    d.setHours(19, 0, 0, 0); // 19:00:00 hoy
    return d;
  }, []);

  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const isUnlocked = now.getTime() >= target.getTime();

  const msLeft = Math.max(0, target.getTime() - now.getTime());
  const totalSeconds = Math.floor(msLeft / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        {/* Card */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 shadow-2xl backdrop-blur">
          {/* Header */}
           {
              !isUnlocked && 
                <div className="p-6 sm:p-10 border-b border-slate-800">
                  {/* <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                    Para ti ♥
                  </h1> */}
                
                    <p className="text-slate-400 mt-1 text-sm">
                      Este mensaje se desbloquea hoy a las <span className="font-medium text-slate-200">7:00 p. m.</span>
                    </p>
                  
                </div>
          }
          {/* Body */}
          <div className="p-6 sm:p-10">
            {!isUnlocked ? (
              <LockedState hours={hours} minutes={minutes} seconds={seconds} />
            ) : (
              <Letter />
            )}
            {/* <Letter /> */}
          </div>

          {/* Footer */}
          {
            !isUnlocked && 
              <div className="px-6 sm:px-10 pb-6 sm:pb-10">
                <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                  <p className="text-xs text-slate-400">
                    Si no ves el contenido a las 7:00 p. m., actualiza la página.
                  </p>
                </div>
              </div>
          }
        </div>
      </div>
    </div>
  );
}

function LockedState({ hours, minutes, seconds }) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/60">
        <span className="text-2xl">🔒</span>
      </div>
      <h2 className="text-xl sm:text-2xl font-medium">Aún no es hora</h2>
      <p className="mt-2 text-slate-400">El contenido se habilitará a las 7:00 p. m. de hoy.</p>
      <div className="mt-6">
        <div className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 font-mono text-lg">
          <span>{hours}</span>
          <span>:</span>
          <span>{minutes}</span>
          <span>:</span>
          <span>{seconds}</span>
        </div>
      </div>
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-300">
      {children}
    </span>
  );
}

function Letter() {
  return (
    <article className="prose prose-invert prose-slate max-w-none">
      <p>
        No voy a estar tranquilo conmigo mismo hasta que diga algo que represente lo que siento, y quizás las palabras escritas me salgan mejor que las pronunciadas. Cuando te escucho hablar me siento culpable de todo porque me haces ver un punto de vista que a veces es muy difícil de ver desde mi posición, pienso que llegué en un punto de tu vida donde todo se salió de control y no he hecho más que restar, donde ya no encuentras la tranquilidad que un día te prometí que te iba a dar.
      </p>
      <br />
      <p>
        A veces por allá en el fondo siento que todo lo que estoy viviendo es una alucinación producida por el trauma de estar solo y que tal vez si tienes razón cuando dices que “para hacer las cosas sola, mejor te quedas sola”. — Luego pienso: “jaja tan mal no puedo estar haciendo las cosas”.
      </p>
      <br />
      <p>
        Cometo errores, errores que me ponen en una muy mala posición frente a tus ojos. Sé que me quieres, pero también sé que no estás dispuesta a repetir cosas por las que ya has pasado, y más cuando te prometí que conmigo las cosas iban a ser diferentes, pero recapitulando todas las cosas que han pasado este mes yo pensaría en tú posición que todo apunta a ser lo mismo de siempre.
      </p>
      <br />
      <p>
        No te voy a poner la excusa barata y decirte que “Es que yo no soy así” pero a veces tomo malas decisiones que me puede dejar expuesto a malos entendidos que son difíciles de explicar y de creer. Se que para todo tengo una explicación y eso puede ser contraproducente, pero por todo el amor que te tengo, por la forma en la que te ven y te verán mis ojos toda la vida sería incapaz de mentirte; porque me voy a sentir como un c*lo, porque me voy a sentir culpable; por la sencilla razón de que no te estaría metiendo solo a ti, si no que me estaría metiendo también a mi.
      </p>
      <br />
      <p>
        La opción que tengo es ceder, porque soy 100% consciente que para un efecto debe de haber una causa, y ya te he dado varias causas. Te amo y te adoro de una forma tan pura, auténtica y real que me asusta.
      </p>
      <br />
      <p>
        Es por ese amor y por la visión que tengo contigo que pienso en el otro lado de la moneda: Muchas veces me gusta imaginarte, y siempre se viene a mi mente una clara imagen de ti sonriendo, eso me hace pensar que eres feliz a mi lado así te de dolores de cabeza de vez en cuando.
      </p>
      <br />
      <p>
        Imaginarte sonreír me manda al primer día que salimos donde me dijiste “y tu qué?”, me hace recordar todas las cosas por las que hemos pasado y me hace sentir orgulloso del camino que estamos creando juntos, porque a pesar de que discutimos, también sé que somos muy buen equipo.
      </p>
      <br />
      <p>
        No me quiero quedar en lo que ha pasado, sino aprender de eso para corregir, y seguir caminando a tu lado. Lo que más me importa ahora es darte tranquilidad y seguridad. Por mucho tiempo hice todo por mi cuenta, gestioné mi vida solo, a veces de formas cuestionables (pero con resultados aceptables) pero con tu llegada a mi vida todo cambió; básicamente pasé de un polo a otro, y no me di cuenta de eso.
      </p>
      <br />
      <p>
        No quiero representar una carga más en tu vida, si no más bien alguien que te ayude a aligerar todos esos pesos, ser más que tu pareja; convertirme en una especie de extensión. Te estoy amando de una manera que se me hace difícil de explicar.
      </p>
    </article>
  );
}
