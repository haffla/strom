import { goToRoom } from "../areas"

export default {
  id: "entry",
  name: "Eingang",
  effects: [
    {
      fn: (state) => {
        const character = {
          ...state.character,
          stamina: state.character.stamina - 1,
        };
        return { ...state, character };
      },
      interval: 1500,
    },
  ],
  streams: [
    {
      url: "https://www.youtube.com/watch?v=f2_aRlAAlKs",
    },
  ],
  // classesFn: (state) => {
  //   const background = state.character.stamina > 100 ? "dark" : "light";
  //   return {
  //     background,
  //   };
  // },
  cssStylesFn: (_state) => {
    return {
      chatSection: {
        backgroundColor: "#ff0000",
      },
      contentSection: {
        backgroundImage: "url(/img/shebang2-500.gif)",
      },
      contentSectionDiv: {
        backgroundColor: "#ff0000",
      },
    };
  },
  mainContent: ({ dispatch }) => {
    return (
      <>
        <p id="mainText">
          Er hörte leise Schritte hinter sich. Das bedeutete nichts Gutes. Wer
          würde ihm schon folgen, spät in der Nacht und dazu noch in dieser
          engen Gasse mitten im übel beleumundeten Hafenviertel? Gerade jetzt,
          wo er das Ding seines Lebens gedreht hatte und mit der Beute
          verschwinden wollte! Hatte einer seiner zahllosen Kollegen dieselbe
          Idee gehabt, ihn beobachtet und abgewartet, um ihn nun um die Früchte
          seiner Arbeit zu erleichtern?
          <br />
          <br />
          Oder gehörten die Schritte hinter ihm zu einem der unzähligen
          Gesetzeshüter dieser Stadt, und die stählerne Acht um seine
          Handgelenke würde gleich zuschnappen? Er konnte die Aufforderung
          stehen zu bleiben schon hören. Gehetzt sah er sich um. Plötzlich
          erblickte er den schmalen Durchgang. Blitzartig drehte er sich nach
          rechts und verschwand zwischen den beiden Gebäuden. Beinahe wäre er
          dabei über den umgestürzten Mülleimer gefallen, der mitten im Weg lag.
          <br />
          <br />
          Er versuchte, sich in der Dunkelheit seinen Weg zu ertasten und
          erstarrte: Anscheinend gab es keinen anderen Ausweg aus diesem kleinen
          Hof als den Durchgang, durch den er gekommen war. Die Schritte wurden
          lauter und lauter, er sah eine dunkle Gestalt um die Ecke biegen.
          Fieberhaft irrten seine Augen durch die nächtliche Dunkelheit und
          suchten einen Ausweg. War jetzt wirklich alles vorbei, waren alle Mühe
          und alle Vorbereitungen umsonst?
          <br />
          <br />
          Er presste sich ganz eng an die Wand hinter ihm und hoffte, der
          Verfolger würde ihn übersehen, als plötzlich neben ihm mit kaum
          wahrnehmbarem Quietschen eine Tür im nächtlichen Wind hin und her
          schwang. Könnte dieses der flehentlich herbeigesehnte Ausweg aus
          seinem Dilemma sein? Langsam bewegte er sich auf die offene Tür zu,
          immer dicht an die Mauer gepresst. Würde diese Tür seine Rettung
          werden? Er hörte leise Schritte hinter sich. Das bedeutete nichts
          Gutes.
          <br />
          <br />
          Wer würde ihm schon ...
        </p>
        <div className="d-flex justify-content-around">
          <button
            className="mainButton"
            onClick={() => goToRoom({ dispatch, room: "johnny" })}
          >
            vertrauen?
          </button>
          <button
            className="mainButton"
            onClick={() => goToRoom({ dispatch, room: "johnny" })}
          >
            zustimmen?
          </button>
          <button
            className="mainButton"
            onClick={() => goToRoom({ dispatch, room: "johnny" })}
          >
            widersprechen?
          </button>
        </div>
      </>
    );
  },
};
