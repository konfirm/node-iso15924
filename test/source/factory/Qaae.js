/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qaae - Codes reserved for private use', () => {
		const qaae = factory('Qaae');

		it('instances are singletons', (next) => {
			const singleton = factory('Qaae');
			const upper = factory('QAAE');
			const lower = factory('qaae');
			const code = factory.code('Qaae');
			const numeric = factory.numeric('904');
			const number = factory.numeric(904);
			const instance = new ISO15924('Qaae', '904');

			expect(singleton).to.shallow.equal(qaae);
			expect(upper).to.shallow.equal(qaae);
			expect(lower).to.shallow.equal(qaae);
			expect(code).to.shallow.equal(qaae);
			expect(numeric).to.shallow.equal(qaae);
			expect(number).to.shallow.equal(qaae);
			expect(instance).not.to.shallow.equal(qaae);
			expect(instance.code).to.equal(qaae.code);
			expect(instance.numeric).to.equal(qaae.numeric);

			next();
		});

		it('has code "Qaae"', (next) => {
			expect(qaae.code).to.equal('Qaae');

			next();
		});

		it('has numeric "904"', (next) => {
			expect(qaae.numeric).to.equal('904');

			next();
		});

		it('implements toString', (next) => {
			expect(qaae.toString).to.be.function();
			expect(qaae.toString()).to.equal('Qaae');
			expect(String(qaae)).to.equal('Qaae');
			expect(0 + qaae).to.equal('0Qaae');
			expect('code:' + qaae).to.equal('code:Qaae');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qaae.toJSON).to.be.function();
			expect(qaae.toJSON()).to.equal('Qaae');
			expect(JSON.stringify(qaae)).to.equal('"Qaae"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qaae.valueOf).to.be.function();
			expect(qaae.valueOf()).to.equal(904);
			expect(Number(qaae)).to.equal(904);
			expect(+qaae).to.equal(904);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qaae.valueOf).to.be.function();
			expect(qaae.valueOf()).to.equal(904);
			expect(Number(qaae)).to.equal(904);
			expect(+qaae).to.equal(904);

			expect(0 + qaae).to.equal('0Qaae');
			expect(String(qaae)).to.equal('Qaae');

			next();
		});
	});
});
