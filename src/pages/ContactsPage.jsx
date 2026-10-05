export default function ContactsPage() {
  return (
    <section className="page-shell narrow">
      <span className="eyebrow">CONTACTS</span>
      <h1 className="page-title">Контакты</h1>

      <div className="contact-card">
        <div>
          <span>EMAIL</span>
          <strong>hello@moviebox.example</strong>
        </div>
        <div>
          <span>TELEGRAM</span>
          <strong>@moviebox_app</strong>
        </div>
      </div>
    </section>
  );
}