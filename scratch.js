var nlp = require('./src/index')
// nlp.verbose(true)
// nlp.extend(require('./plugins/verbs/src'))
// nlp.extend(require('./plugins/ngrams/src'))

// {3}	Exactly three times	\D{3}	ABC
// {2,4}	Two to four times	\d{2,4}	156
// {3,}	Three or more times

nlp('hello1 one two three four five six')
  .match('hello1 .{1,3}')
  .debug()

// nlp('jean jacket. jean Slkje').debug()
// let str = '.('
// let doc = nlp(str).debug()
// console.log(doc.out(), doc.out() === str)

// let str = 'tornado/hurricane'
// let doc = nlp(str)
//   .match('@hasSlash')
//   .debug()
