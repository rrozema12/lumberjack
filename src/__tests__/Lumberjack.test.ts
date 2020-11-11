import Lumberjack from '../Lumberjack';

test('Lumberjack LOG tests', () => {
  const logger = new Lumberjack();

  const content1 = { test: { test: 'test' } };
  const content2 = ['test', 'wow'];
  const content3 = false;

  logger.log('This is an object', content1);
  expect(logger.body).toStrictEqual({
    color: '\u001b[37m',
    backgroundColor: '\u001b[42m',
    type: 'LOG',
    message: 'This is an object',
    content: { test: { test: 'test' } },
  });

  logger.log('This is an array', content2);
  expect(logger.body).toStrictEqual({
    color: '\u001b[37m',
    backgroundColor: '\u001b[42m',
    type: 'LOG',
    message: 'This is an array',
    content: ['test', 'wow'],
  });

  logger.log('This is a boolean', content3);
  expect(logger.body).toStrictEqual({
    color: '\u001b[37m',
    backgroundColor: '\u001b[42m',
    type: 'LOG',
    message: 'This is a boolean',
    content: false,
  });

  logger.log('This is has no content');
  expect(logger.body).toStrictEqual({
    color: '\u001b[37m',
    backgroundColor: '\u001b[42m',
    type: 'LOG',
    message: 'This is has no content',
    content: undefined,
  });
});

test('Lumberjack INFO tests', () => {
  const logger = new Lumberjack();

  const content1 = { test: { test: 'test' } };
  const content2 = ['test', 'wow'];
  const content3 = false;

  logger.info('This is an object', content1);
  expect(logger.body).toStrictEqual({
    color: '\u001b[37m',
    backgroundColor: '\x1b[44m',
    type: 'INFO',
    message: 'This is an object',
    content: { test: { test: 'test' } },
  });

  logger.info('This is an array', content2);
  expect(logger.body).toStrictEqual({
    color: '\u001b[37m',
    backgroundColor: '\x1b[44m',
    type: 'INFO',
    message: 'This is an array',
    content: ['test', 'wow'],
  });

  logger.info('This is a boolean', content3);
  expect(logger.body).toStrictEqual({
    color: '\u001b[37m',
    backgroundColor: '\x1b[44m',
    type: 'INFO',
    message: 'This is a boolean',
    content: false,
  });

  logger.info('This is has no content');
  expect(logger.body).toStrictEqual({
    color: '\u001b[37m',
    backgroundColor: '\x1b[44m',
    type: 'INFO',
    message: 'This is has no content',
    content: undefined,
  });
});

test('Lumberjack WARN tests', () => {
  const logger = new Lumberjack();

  const content1 = { test: { test: 'test' } };
  const content2 = ['test', 'wow'];
  const content3 = false;

  logger.warn('This is an object', content1);
  expect(logger.body).toStrictEqual({
    color: '\u001b[37m',
    backgroundColor: '\x1b[43m',
    type: 'WARN',
    message: 'This is an object',
    content: { test: { test: 'test' } },
  });

  logger.warn('This is an array', content2);
  expect(logger.body).toStrictEqual({
    color: '\u001b[37m',
    backgroundColor: '\x1b[43m',
    type: 'WARN',
    message: 'This is an array',
    content: ['test', 'wow'],
  });

  logger.warn('This is a boolean', content3);
  expect(logger.body).toStrictEqual({
    color: '\u001b[37m',
    backgroundColor: '\x1b[43m',
    type: 'WARN',
    message: 'This is a boolean',
    content: false,
  });

  logger.warn('This is has no content');
  expect(logger.body).toStrictEqual({
    color: '\u001b[37m',
    backgroundColor: '\x1b[43m',
    type: 'WARN',
    message: 'This is has no content',
    content: undefined,
  });
});

test('Lumberjack ERROR tests', () => {
  const logger = new Lumberjack();

  const content1 = { test: { test: 'test' } };
  const content2 = ['test', 'wow'];
  const content3 = false;

  logger.error('This is an object', content1);
  expect(logger.body).toStrictEqual({
    color: '\u001b[37m',
    backgroundColor: '\x1b[41m',
    type: 'ERROR',
    message: 'This is an object',
    content: { test: { test: 'test' } },
  });

  logger.error('This is an array', content2);
  expect(logger.body).toStrictEqual({
    color: '\u001b[37m',
    backgroundColor: '\x1b[41m',
    type: 'ERROR',
    message: 'This is an array',
    content: ['test', 'wow'],
  });

  logger.error('This is a boolean', content3);
  expect(logger.body).toStrictEqual({
    color: '\u001b[37m',
    backgroundColor: '\x1b[41m',
    type: 'ERROR',
    message: 'This is a boolean',
    content: false,
  });

  logger.error('This is has no content');
  expect(logger.body).toStrictEqual({
    color: '\u001b[37m',
    backgroundColor: '\x1b[41m',
    type: 'ERROR',
    message: 'This is has no content',
    content: undefined,
  });
});
