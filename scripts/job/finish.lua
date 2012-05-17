-- ARGV: name, id, result
local name, id, result = unpack(ARGV);

if redis.call('zrem', 'job.claimed:'..name, id) == 0 then
    return {'Job not claimed', false};
end
redis.call('hdel', 'job.cancelled:'..name, id)
redis.call('zrem', 'job.published:'..name, id)
redis.call('incr', 'job.finishes:'..name)
redis.call('publish', 'job.finish:'..name, id)
redis.call('hdel', 'job.items:'..name, id)
if result then
    return {false, id, result};
else
    return {false, id};
end
