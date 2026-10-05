import { useNavigate } from 'react-router-dom';
import StatusBlock from '../components/StatusBlock.jsx';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <section className="page-shell">
      <StatusBlock
        title="Страница не найдена"
        text="Похоже, такого адреса нет в MovieBox."
        buttonText="На главную"
        onClick={() => navigate('/')}
      />
    </section>
  );
}