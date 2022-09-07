import { Helmet, HelmetProvider } from 'react-helmet-async';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomePage = () => {
  return (
    <div style={styles.container}>
      <HelmetProvider>
        <Helmet>
          <title>Home page</title>
        </Helmet>
      </HelmetProvider>

      <h1 style={styles.title}>
        Приветственная страница нашего сервиса{' '}
        <span role="img" aria-label="Иконка приветствия">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
};

export default HomePage;
