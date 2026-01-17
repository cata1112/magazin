export function Privacy() {
  return (
    <section id="privacy" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
          Datenschutzerklärung
        </h2>

        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">1. Datenschutz auf einen Blick</h3>
            <h4 className="font-semibold mt-4 mb-2">Allgemeine Hinweise</h4>
            <p className="mb-3">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">2. Datenerfassung auf dieser Website</h3>
            <h4 className="font-semibold mt-4 mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
            <p className="mb-3">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen 
              Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>

            <h4 className="font-semibold mt-4 mb-2">Wie erfassen wir Ihre Daten?</h4>
            <p className="mb-3">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann 
              es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>
            <p className="mb-3">
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website 
              durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, 
              Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">3. Allgemeine Hinweise und Pflichtinformationen</h3>
            <h4 className="font-semibold mt-4 mb-2">Datenschutz</h4>
            <p className="mb-3">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir 
              behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen 
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="mb-3">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. 
              Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">4. Datenerfassung auf dieser Website</h3>
            <h4 className="font-semibold mt-4 mb-2">Kontaktformular</h4>
            <p className="mb-3">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
              Anfrage­formular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
              der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>
            <p className="mb-3">
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten 
              erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung 
              eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">5. Ihre Rechte</h3>
            <p className="mb-3">Sie haben folgende Rechte:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Recht auf Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten</li>
              <li>Recht auf Berichtigung unrichtiger Daten</li>
              <li>Recht auf Löschung Ihrer bei uns gespeicherten Daten</li>
              <li>Recht auf Einschränkung der Datenverarbeitung</li>
              <li>Recht auf Datenübertragbarkeit</li>
              <li>Widerspruchsrecht gegen die Verarbeitung Ihrer Daten</li>
              <li>Beschwerderecht bei einer Aufsichtsbehörde</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">6. Kontakt</h3>
            <p className="mb-3">
              Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:
            </p>
            <p>PureClean GmbH</p>
            <p>Datenschutzbeauftragter</p>
            <p>Musterstraße 123</p>
            <p>12345 Berlin</p>
            <p>E-Mail: datenschutz@pureclean.de</p>
          </div>
        </div>
      </div>
    </section>
  );
}
