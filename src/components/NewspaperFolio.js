export default function NewspaperFolio({ 
  publicationName = "The Subpar Dev Press",
  date,
  volume = "Vol. II",
  editionNumber 
}) {
  return (
    <div className="newspaper-folio newspaper-ink-specks">
      <div className="newspaper-folio-sides">
        <span className="newspaper-smallcaps">{publicationName}</span>
        <span className="newspaper-registration-mark"></span>
      </div>
      <span className="newspaper-smallcaps">{date}</span>
      <div className="newspaper-folio-sides">
        <span className="newspaper-smallcaps">{volume}</span>
        <span className="newspaper-smallcaps">No. {editionNumber}</span>
      </div>
    </div>
  );
}