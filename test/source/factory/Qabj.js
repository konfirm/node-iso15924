/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qabj - Codes reserved for private use', () => {
		const qabj = factory('Qabj');

		it('instances are singletons', (next) => {
			const singleton = factory('Qabj');
			const upper = factory('QABJ');
			const lower = factory('qabj');
			const code = factory.code('Qabj');
			const numeric = factory.numeric('935');
			const number = factory.numeric(935);
			const instance = new ISO15924('Qabj', '935');

			expect(singleton).to.shallow.equal(qabj);
			expect(upper).to.shallow.equal(qabj);
			expect(lower).to.shallow.equal(qabj);
			expect(code).to.shallow.equal(qabj);
			expect(numeric).to.shallow.equal(qabj);
			expect(number).to.shallow.equal(qabj);
			expect(instance).not.to.shallow.equal(qabj);
			expect(instance.code).to.equal(qabj.code);
			expect(instance.numeric).to.equal(qabj.numeric);

			next();
		});

		it('has code "Qabj"', (next) => {
			expect(qabj.code).to.equal('Qabj');

			next();
		});

		it('has numeric "935"', (next) => {
			expect(qabj.numeric).to.equal('935');

			next();
		});

		it('implements toString', (next) => {
			expect(qabj.toString).to.be.function();
			expect(qabj.toString()).to.equal('Qabj');
			expect(String(qabj)).to.equal('Qabj');
			expect(0 + qabj).to.equal('0Qabj');
			expect('code:' + qabj).to.equal('code:Qabj');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qabj.toJSON).to.be.function();
			expect(qabj.toJSON()).to.equal('Qabj');
			expect(JSON.stringify(qabj)).to.equal('"Qabj"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qabj.valueOf).to.be.function();
			expect(qabj.valueOf()).to.equal(935);
			expect(Number(qabj)).to.equal(935);
			expect(+qabj).to.equal(935);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qabj.valueOf).to.be.function();
			expect(qabj.valueOf()).to.equal(935);
			expect(Number(qabj)).to.equal(935);
			expect(+qabj).to.equal(935);

			expect(0 + qabj).to.equal('0Qabj');
			expect(String(qabj)).to.equal('Qabj');

			next();
		});
	});
});
