-- One-off: move per-scan event rows into daily counters, then delete them.
insert into cv_daily_stats (business_id, day, rated1, rated2, rated3, rated4, rated5, copied)
select data->>'businessId',
       (created_at at time zone 'Asia/Kolkata')::date,
       count(*) filter (where data->>'type' = 'rated' and data->>'rating' = '1'),
       count(*) filter (where data->>'type' = 'rated' and data->>'rating' = '2'),
       count(*) filter (where data->>'type' = 'rated' and data->>'rating' = '3'),
       count(*) filter (where data->>'type' = 'rated' and data->>'rating' = '4'),
       count(*) filter (where data->>'type' = 'rated' and data->>'rating' = '5'),
       count(*) filter (where data->>'type' = 'copied')
from cv_records where collection = 'events'
group by 1, 2
on conflict (business_id, day) do update set
  rated1 = cv_daily_stats.rated1 + excluded.rated1, rated2 = cv_daily_stats.rated2 + excluded.rated2,
  rated3 = cv_daily_stats.rated3 + excluded.rated3, rated4 = cv_daily_stats.rated4 + excluded.rated4,
  rated5 = cv_daily_stats.rated5 + excluded.rated5, copied = cv_daily_stats.copied + excluded.copied;
delete from cv_records where collection = 'events';
