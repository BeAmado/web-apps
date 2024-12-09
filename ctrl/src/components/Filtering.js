export default function Filtering() {
  return (
    <section className="filtering">
      <div className="centered">
        <div className="search-area">
          <i className="fa-solid fa-search icon"></i>
          <input name="search-value"
            type="text"
            placeholder="Filter placeholder" />
        </div>
        <div className="list-filters" v-if="false">
          <ul className="inline-list">
            <li v-for="dataFilter in availableFilters">
              <button className="clickable">dataFilter.label</button>
            </li>
          </ul>
          <button className="tertiary clickable">Limpar</button>
        </div>
      </div>
      <div className="flex-container justify-right">
        <div className="info-selector">
          <button id="by-titulo"
            className="clickable"
          >Por t&iacute;tulo</button>
          <button id="by-lancamento"
            className="clickable"
          >Por lan&ccedil;amento</button>
        </div>
      </div>
    </section>
  );
}